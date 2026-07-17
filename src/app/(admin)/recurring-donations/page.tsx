'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Search, DollarSign, Bell, Loader2, X } from 'lucide-react';
import { apiClient } from '@/lib/api';
import { cn, formatCurrency } from '@/lib/utils';
import { toast } from 'sonner';
import { useTranslation } from '@/lib/i18n/useTranslation';

export default function RecurringDonationsPage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [filterType, setFilterType] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('all'); // 'all', 'paid', 'unpaid'
  const [search, setSearch] = useState('');

  // Payment Modal States
  const [selectedFamily, setSelectedFamily] = useState<any>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentGateway, setPaymentGateway] = useState('cash');
  const [paymentDescription, setPaymentDescription] = useState('');

  const { data: familiesData, isLoading } = useQuery({
    queryKey: ['families', search],
    queryFn: () => apiClient.get('/families', {
      params: { search },
    }).then(r => r.data.data || []),
  });

  const remindMutation = useMutation({
    mutationFn: (familyId: string) => apiClient.post(`/families/${familyId}/remind-recurring`),
    onSuccess: (data) => toast.success(data?.data?.message || 'Reminder sent successfully'),
    onError: (err: any) => toast.error(err?.response?.data?.message || 'Failed to send reminder'),
  });

  const collectMutation = useMutation({
    mutationFn: (data: any) => apiClient.post('/receipts/manual', data),
    onSuccess: () => {
      toast.success('Payment logged & receipt generated successfully');
      setIsPaymentModalOpen(false);
      setSelectedFamily(null);
      setPaymentAmount('');
      setPaymentDescription('');
      queryClient.invalidateQueries({ queryKey: ['families'] });
      queryClient.invalidateQueries({ queryKey: ['receipts'] });
      queryClient.invalidateQueries({ queryKey: ['finance-kpis'] });
    },
    onError: (err: any) => toast.error(err?.response?.data?.message || 'Failed to log payment')
  });

  const families = familiesData || [];

  // Filter based on recurringDonationType and paymentStatus
  const filteredFamilies = families.filter((f: any) => {
    // 1. Must be a recurring donation family
    if (!f.recurringDonationType || f.recurringDonationType === 'none') return false;
    
    // 2. Frequency filter
    if (filterType && f.recurringDonationType !== filterType) return false;

    // 3. Payment status filter
    if (paymentStatus === 'paid') return (f.outstandingBalance || 0) <= 0;
    if (paymentStatus === 'unpaid') return (f.outstandingBalance || 0) > 0;
    
    return true;
  });

  // Analytics
  const monthlyTotal = families
    .filter((f: any) => f.recurringDonationType === 'monthly')
    .reduce((sum: number, f: any) => sum + (f.recurringDonationAmount || 0), 0);

  const yearlyTotal = families
    .filter((f: any) => f.recurringDonationType === 'yearly')
    .reduce((sum: number, f: any) => sum + (f.recurringDonationAmount || 0), 0);

  const totalPending = families
    .filter((f: any) => f.recurringDonationType && f.recurringDonationType !== 'none')
    .reduce((sum: number, f: any) => sum + (Math.max(0, f.outstandingBalance || 0)), 0);

  const triggerAlert = (familyId: string, familyName: string, amount: number) => {
    if (amount <= 0) return toast.info(`${familyName} has no outstanding balance to pay.`);
    remindMutation.mutate(familyId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">{t('recurring_donations_page.title')}</h1>
          <p className="page-subtitle">{t('recurring_donations_page.subtitle')}</p>
        </div>
      </div>

      {/* Analytics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-card flex items-center gap-4 animate-count"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-100 dark:bg-emerald-950/30">
            <DollarSign size={18} className="text-emerald-600" />
          </div>
          <div>
            <p className="text-2xl font-bold">{formatCurrency(monthlyTotal)}</p>
            <p className="text-xs text-muted-foreground">{t('recurring_donations_page.expectedMonthly')}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="section-card flex items-center gap-4 animate-count"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-100 dark:bg-blue-950/30">
            <Calendar size={18} className="text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold">{formatCurrency(yearlyTotal)}</p>
            <p className="text-xs text-muted-foreground">{t('recurring_donations_page.expectedYearly')}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="section-card flex items-center gap-4 animate-count"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-100 dark:bg-red-950/30">
            <Bell size={18} className="text-red-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-red-600">{formatCurrency(totalPending)}</p>
            <p className="text-xs text-muted-foreground">{t('recurring_donations_page.totalPending')}</p>
          </div>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="section-card">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('recurring_donations_page.search')}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <select
            value={filterType}
            onChange={e => setFilterType(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">{t('recurring_donations_page.allFrequencies')}</option>
            <option value="monthly">{t('recurring_donations_page.monthlySubscriptions')}</option>
            <option value="yearly">{t('recurring_donations_page.yearlyDonations')}</option>
          </select>
          <select
            value={paymentStatus}
            onChange={e => setPaymentStatus(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold"
          >
            <option value="all">{t('recurring_donations_page.allStatuses')}</option>
            <option value="unpaid">{t('recurring_donations_page.unpaidReport')}</option>
            <option value="paid">{t('recurring_donations_page.paidReport')}</option>
          </select>
        </div>
      </div>

      {/* Recurring Donations Table */}
      <div className="section-card overflow-hidden p-0">
        {isLoading ? (
          <div className="space-y-3 p-6">
            {[...Array(5)].map((_, i) => <div key={i} className="h-14 rounded-xl shimmer" />)}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="pl-6">{t('recurring_donations_page.familyCode')}</th>
                  <th>{t('recurring_donations_page.familyHead')}</th>
                  <th>{t('recurring_donations_page.contact')}</th>
                  <th>{t('recurring_donations_page.frequency')}</th>
                  <th>{t('recurring_donations_page.configuredAmount')}</th>
                  <th>{t('recurring_donations_page.outstandingBalance')}</th>
                  <th className="pr-6">{t('recurring_donations_page.actions')}</th>
                </tr>
              </thead>
              <tbody>
                {filteredFamilies.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-muted-foreground">
                      <Calendar size={40} className="mx-auto mb-3 opacity-30" />
                      <p>No families found matching current filters</p>
                    </td>
                  </tr>
                ) : (
                  filteredFamilies.map((family: any, i: number) => (
                    <motion.tr
                      key={family._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.02 }}
                      className="group"
                    >
                      <td className="pl-6">
                        <code className="text-xs bg-muted px-2 py-0.5 rounded-md font-bold">{family.familyCode}</code>
                      </td>
                      <td>
                        <span className="font-medium text-foreground">
                          {family.headMemberId?.name || 'Unknown Head'}
                        </span>
                      </td>
                      <td className="text-muted-foreground text-sm">
                        {family.headMemberId?.phone || '—'}
                      </td>
                      <td>
                        <span className={cn('text-xs px-2.5 py-1 rounded-full font-semibold capitalize',
                          family.recurringDonationType === 'monthly'
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400'
                            : 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400'
                        )}>
                          {family.recurringDonationType === 'monthly' ? t('families.edit.monthly') : t('families.edit.yearly')}
                        </span>
                      </td>
                      <td className="text-sm font-semibold text-foreground">
                        {formatCurrency(family.recurringDonationAmount || 0)}
                      </td>
                      <td>
                        <span className={cn('text-sm font-bold',
                          (family.outstandingBalance || 0) > 0 ? 'text-red-500' : 'text-emerald-600'
                        )}>
                          {formatCurrency(family.outstandingBalance || 0)}
                         </span>
                      </td>
                      <td className="pr-6">
                        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          {(family.outstandingBalance || 0) > 0 && (
                            <>
                              <button
                                onClick={() => {
                                  setSelectedFamily(family);
                                  setPaymentAmount(String(family.outstandingBalance || 0));
                                  setIsPaymentModalOpen(true);
                                }}
                                className="flex items-center gap-1 text-xs text-emerald-600 hover:underline font-bold"
                              >
                                <DollarSign size={13} />
                                Collect
                              </button>
                              <button
                                onClick={() => triggerAlert(family._id, family.headMemberId?.name || family.familyCode, family.outstandingBalance || 0)}
                                disabled={remindMutation.isPending && remindMutation.variables === family._id}
                                className="flex items-center gap-1 text-xs text-amber-600 hover:underline font-bold disabled:opacity-50"
                              >
                                {remindMutation.isPending && remindMutation.variables === family._id ? <Loader2 size={13} className="animate-spin" /> : <Bell size={13} />}
                                {t('recurring_donations_page.sendAlert')}
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Collect Payment Modal */}
      <AnimatePresence>
        {isPaymentModalOpen && selectedFamily && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card w-full max-w-md rounded-2xl shadow-xl border overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-4 border-b flex items-center justify-between bg-card">
                <h2 className="font-bold text-lg">Collect Recurring Payment</h2>
                <button onClick={() => { setIsPaymentModalOpen(false); setSelectedFamily(null); }} className="p-2 hover:bg-muted rounded-full">
                  <X size={18} />
                </button>
              </div>
              <div className="p-4 overflow-y-auto space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Family Code</label>
                  <p className="text-sm font-bold bg-muted p-2.5 rounded-xl">{selectedFamily.familyCode}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Paid By (Family Head)</label>
                  <p className="text-sm font-bold bg-muted p-2.5 rounded-xl">{selectedFamily.headMemberId?.name || 'Unknown'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Amount (INR) *</label>
                  <input 
                    type="number" 
                    value={paymentAmount} 
                    onChange={e => setPaymentAmount(e.target.value)}
                    className="w-full p-2.5 rounded-xl border text-sm" 
                    placeholder="Enter amount..." 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Payment Method *</label>
                  <select 
                    value={paymentGateway} 
                    onChange={e => setPaymentGateway(e.target.value)}
                    className="w-full p-2.5 rounded-xl border text-sm bg-background"
                  >
                    <option value="cash">Collected By Hand (Cash)</option>
                    <option value="upi">Google Pay / PhonePe / UPI</option>
                    <option value="bank_transfer">Direct Bank Transfer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Description / Note</label>
                  <input 
                    type="text" 
                    value={paymentDescription} 
                    onChange={e => setPaymentDescription(e.target.value)}
                    className="w-full p-2.5 rounded-xl border text-sm" 
                    placeholder="e.g. Paid cash for subscription dues" 
                  />
                </div>
              </div>
              <div className="p-4 border-t bg-card flex gap-3">
                <button onClick={() => { setIsPaymentModalOpen(false); setSelectedFamily(null); }} className="flex-1 py-2.5 rounded-xl border font-bold text-sm">Cancel</button>
                <button 
                  onClick={() => collectMutation.mutate({
                    amount: Number(paymentAmount),
                    type: selectedFamily.recurringDonationType === 'monthly' ? 'subscription' : 'donation',
                    paidById: selectedFamily.headMemberId?._id,
                    paidForId: selectedFamily.headMemberId?._id,
                    gateway: paymentGateway,
                    description: paymentDescription || `Recurring ${selectedFamily.recurringDonationType} contribution`
                  })}
                  disabled={collectMutation.isPending || !paymentAmount} 
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm flex justify-center items-center"
                >
                  {collectMutation.isPending ? <Loader2 size={18} className="animate-spin" /> : 'Log Payment'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
