'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Calendar, Search, CheckCircle, XCircle, Clock, CheckSquare } from 'lucide-react';
import { apiClient } from '@/lib/api';
import { cn, formatDate } from '@/lib/utils';
import { useTranslation } from '@/lib/i18n/useTranslation';

export default function AttendancePage() {
  const { t } = useTranslation();
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [classId, setClassId] = useState('');

  const { data: classes } = useQuery({
    queryKey: ['classes'],
    queryFn: () => apiClient.get('/classes').then(r => r.data.data),
  });

  useEffect(() => {
    if (classes && classes.length > 0 && !classId) {
      setClassId(classes[0]._id);
    }
  }, [classes, classId]);

  const { data, isLoading } = useQuery({
    queryKey: ['attendance', classId, date],
    queryFn: () => apiClient.get(`/attendance/class/${classId}`, {
      params: { date },
    }).then(r => r.data),
    enabled: !!classId,
  });

  const records = data?.data || [];

  const presentCount = records.filter((r: any) => r.status === 'present').length;
  const absentCount = records.filter((r: any) => r.status === 'absent').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">{t('attendance_page.title')}</h1>
          <p className="page-subtitle">{t('attendance_page.subtitle')}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: t('attendance_page.present'), value: presentCount, icon: CheckCircle, color: '#059669' },
          { label: t('attendance_page.absent'), value: absentCount, icon: XCircle, color: '#f43f5e' },
          { label: t('attendance_page.total'), value: records.length, icon: Calendar, color: '#3b82f6' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="section-card flex items-center gap-4 animate-count"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${stat.color}15` }}>
              <stat.icon size={18} style={{ color: stat.color }} />
            </div>
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className="section-card">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <select
            value={classId}
            onChange={e => setClassId(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {classes && classes.length > 0 ? (
              classes.map((c: any) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))
            ) : (
              <option value="">No classes found</option>
            )}
          </select>
        </div>
      </div>

      {/* Attendance Logs */}
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
                  <th className="pl-6">{t('attendance_page.studentName')}</th>
                  <th>{t('attendance_page.admissionId')}</th>
                  <th>{t('attendance_page.date')}</th>
                  <th>{t('attendance_page.status')}</th>
                </tr>
              </thead>
              <tbody>
                {records.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-12 text-muted-foreground">
                      <CheckSquare size={40} className="mx-auto mb-3 opacity-30" />
                      <p>{t('attendance_page.noLogs')}</p>
                    </td>
                  </tr>
                ) : (
                  records.map((record: any, i: number) => (
                    <motion.tr
                      key={record._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.02 }}
                    >
                      <td className="pl-6">
                        <span className="font-medium text-foreground">
                          {record.entityId?.name || 'Unknown Student'}
                        </span>
                      </td>
                      <td>
                        <code className="text-xs bg-muted px-2 py-0.5 rounded-md font-bold">{record.entityId?.admissionNo || '—'}</code>
                      </td>
                      <td className="text-muted-foreground text-sm">
                        {formatDate(record.date)}
                      </td>
                      <td>
                        <span className={cn('text-xs px-2.5 py-1 rounded-full font-semibold capitalize',
                          record.status === 'present' ? 'badge-active' : 'badge-overdue'
                        )}>
                          {record.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
