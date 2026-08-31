'use client';

import React, { useState } from 'react';
import { Heart, Check, Link as LinkIcon } from 'lucide-react';
import { wishes } from './data';

export default function WishlistPage() {
  const [items, setItems] = useState(wishes);

  const togglePurchased = (id) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, purchasedBy: item.purchasedBy ? null : 'Kupac' }
        : item
    ));
  };

  const purchasedCount = items.filter(item => item.purchasedBy).length;

  return (
    <div className="min-h-screen" style={{ background: '#f8fafc' }}>
      {/* Header */}
      <div className="pt-16 pb-12 px-6 sm:px-8 text-center" style={{ borderBottom: '1px solid #e2e8f0' }}>
        <div className="flex justify-center mb-6">
          <Heart size={48} className="text-red-500" fill="currentColor" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold mb-5" style={{ color: '#0f172a' }} >
          Moja skromna lista želja
        </h1>
        <div className="flex gap-8 justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ color: '#3b82f6' }}>{items.length}</div>
            <div className="text-sm" style={{ color: '#64748b' }}>Ukupno stavki</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ color: '#22c55e' }}>{purchasedCount}</div>
            <div className="text-sm" style={{ color: '#64748b' }}>Kupljeno</div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-lg transition-all duration-300 transform hover:scale-105 ${
                item.purchasedBy
                  ? 'bg-emerald-50 border-2 border-emerald-300'
                  : 'bg-white border-2 border-blue-400 hover:border-blue-500 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Status badge */}
              {item.purchasedBy && (
                <div className="absolute top-3 right-3 z-10">
                  <div className="flex items-center gap-1 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    <Check size={14} />
                    Kupljena
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col h-full">

                {/* Image */}
                <div className="mb-4 -mx-6 -mt-6 h-40 overflow-hidden rounded-t-lg bg-slate-200">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>


                {/* Category tag */}
                <div className="inline-block w-fit mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full" 
                    style={{
                      background: item.purchasedBy ? 'rgba(34, 197, 94, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                      color: item.purchasedBy ? '#15803d' : '#1e40af'
                    }}>
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-4 leading-tight transition-all ${
                  item.purchasedBy
                    ? 'text-emerald-800 line-through opacity-70'
                    : 'text-slate-900 group-hover:text-blue-600'
                }`}>
                  {item.name}
                </h3>

                {/* Purchased by */}
                {item.purchasedBy && (
                  <p className="text-sm mb-4 font-medium" style={{ color: '#16a34a' }}>
                    Kupio: <span style={{ color: '#15803d' }}>{item.purchasedBy}</span>
                  </p>
                )}

                {/* Link and button - flex spacer */}
                <div className="mt-auto space-y-3">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors group/link"
                    style={{ color: item.purchasedBy ? '#16a34a' : '#3b82f6' }}
                  >
                    <LinkIcon size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    Primer
                  </a>

                  {/* Toggle button */}
                  <button
                    // onClick={() => togglePurchased(item.id)}
                    className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                      item.purchasedBy
                        ? 'bg-emerald-200 text-emerald-900 hover:bg-emerald-300'
                        : 'bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {item.purchasedBy ? 'Označi kao kupljena' : 'Kupi me!'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state check */}
        {items.length === 0 && (
          <div className="text-center py-16">
            <Heart size={48} className="text-slate-300 mx-auto mb-4" />
            <p className="text-slate-400 text-lg">Nema stavki na listi</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="py-8 px-6 sm:px-8 text-center" style={{ borderTop: '1px solid #e2e8f0', color: '#64748b' }}>
        <p className="text-sm">
          Hvala što razmišljaš o mom rođusu! 💕
        </p>
      </div>
    </div>
  );
}
