import React from 'react';
import { OPERATION_LABELS } from '../../lib/stellar';

export default function SearchFilters({ filters, onChange }) {
  const handleChange = (key, value) => {
    onChange({ [key]: value });
  };

  const resetFilters = () => {
    onChange({
      status: 'all',
      memoOnly: false,
      minFee: '',
      maxFee: '',
      type: 'all',
    });
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '16px', 
      padding: '16px', 
      background: 'var(--bg-elevated)', 
      borderRadius: 'var(--radius-md)', 
      border: '1px solid var(--border)', 
      fontSize: '13px',
      marginBottom: '20px',
      alignItems: 'flex-end'
    }}>
      {/* Status Filter */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label style={{ color: 'var(--text-muted)', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</label>
        <select 
          value={filters.status} 
          onChange={(e) => handleChange('status', e.target.value)}
          style={{ background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '6px 10px', outline: 'none', cursor: 'pointer' }}
        >
          <option value="all">All Transactions</option>
          <option value="success">Successful Only</option>
          <option value="failed">Failed Only</option>
        </select>
      </div>

      {/* Operation Type Filter */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label style={{ color: 'var(--text-muted)', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Operation Type</label>
        <select 
          value={filters.type} 
          onChange={(e) => handleChange('type', e.target.value)}
          style={{ background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '6px 10px', outline: 'none', cursor: 'pointer', maxWidth: '180px' }}
        >
          <option value="all">All Types</option>
          {Object.entries(OPERATION_LABELS).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      {/* Fee Range */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label style={{ color: 'var(--text-muted)', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Fee (stroops)</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <input 
            type="number" 
            placeholder="Min"
            value={filters.minFee}
            onChange={(e) => handleChange('minFee', e.target.value)}
            style={{ width: '70px', background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '6px 10px', outline: 'none' }}
          />
          <span style={{ color: 'var(--text-muted)' }}>—</span>
          <input 
            type="number" 
            placeholder="Max"
            value={filters.maxFee}
            onChange={(e) => handleChange('maxFee', e.target.value)}
            style={{ width: '70px', background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '6px 10px', outline: 'none' }}
          />
        </div>
      </div>

      {/* Memo Only */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '8px' }}>
        <input 
          type="checkbox" 
          id="memoOnly"
          checked={filters.memoOnly}
          onChange={(e) => handleChange('memoOnly', e.target.checked)}
          style={{ cursor: 'pointer' }}
        />
        <label htmlFor="memoOnly" style={{ cursor: 'pointer', fontWeight: 500, color: filters.memoOnly ? 'var(--cyan)' : 'var(--text-primary)' }}>Memo Only</label>
      </div>

      {/* Reset Button */}
      <button 
        onClick={resetFilters}
        style={{ 
          marginLeft: 'auto',
          background: 'none',
          border: 'none',
          color: 'var(--text-muted)',
          fontSize: '11px',
          cursor: 'pointer',
          padding: '8px',
          textDecoration: 'underline'
        }}
        onMouseEnter={(e) => e.target.style.color = 'var(--red)'}
        onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
      >
        Reset Filters
      </button>
    </div>
  );
}
