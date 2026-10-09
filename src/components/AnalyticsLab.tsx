import React, { useState, useMemo } from 'react';
import { Calculator, BarChart2, TrendingUp, RefreshCw, Sparkles, Check } from 'lucide-react';

type DatasetKey = 'ubl' | 'retention' | 'orders';

const PRESET_DATASETS: Record<DatasetKey, { name: string; description: string; data: number[] }> = {
  ubl: {
    name: 'UBL Branch Transaction Volumes ($k)',
    description: '15-day sample of branch cash & clearing volumes during internship analysis',
    data: [42, 65, 58, 72, 61, 89, 74, 95, 68, 79, 83, 91, 104, 76, 88]
  },
  retention: {
    name: 'Customer Cohort Retention (%)',
    description: '12-month cohort survival percentages from bank account segmentation',
    data: [100, 88.4, 74.2, 74.2, 74.2, 68.1, 66.8, 65.3, 64.9, 64.1]
  },
  orders: {
    name: 'E-Commerce Basket Values ($)',
    description: 'Sample checkout values from e-commerce retail customer basket analysis',
    data: [120, 240, 180, 487, 310, 620, 450, 510, 390, 780, 520, 640]
  }
};

export const AnalyticsLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stats' | 'regression'>('stats');
  
  // Statistical Profiler State
  const [selectedPreset, setSelectedPreset] = useState<DatasetKey>('ubl');
  const [rawInput, setRawInput] = useState<string>(PRESET_DATASETS.ubl.data.join(', '));

  // Regression State
  const [regDataPoints, setRegDataPoints] = useState<{ x: number; y: number }[]>([
    { x: 10, y: 25 },
    { x: 20, y: 45 },
    { x: 30, y: 62 },
    { x: 40, y: 88 },
    { x: 50, y: 104 },
    { x: 60, y: 129 },
  ]);
  const [predictX, setPredictX] = useState<number>(75);

  // Parse comma-separated numbers
  const parsedNumbers = useMemo(() => {
    return rawInput
      .split(',')
      .map(v => parseFloat(v.trim()))
      .filter(v => !isNaN(v) && isFinite(v));
  }, [rawInput]);

  // Compute statistical metrics
  const stats = useMemo(() => {
    const arr = [...parsedNumbers].sort((a, b) => a - b);
    const n = arr.length;
    if (n === 0) return null;

    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const mean = sum / n;

    // Median
    const median = n % 2 === 0
      ? (arr[n / 2 - 1] + arr[n / 2]) / 2
      : arr[Math.floor(n / 2)];

    // Variance & StdDev
    const variance = n > 1 
      ? arr.reduce((acc, curr) => acc + Math.pow(curr - mean, 2), 0) / (n - 1)
      : 0;
    const stdDev = Math.sqrt(variance);

    const min = arr[0];
    const max = arr[n - 1];
    const range = max - min;

    // Q1, Q3, IQR
    const q1 = arr[Math.floor(n * 0.25)];
    const q3 = arr[Math.floor(n * 0.75)];
    const iqr = q3 - q1;

    // Generate 5 equal distribution bins for visual histogram
    const binCount = 5;
    const binSize = range === 0 ? 1 : range / binCount;
    const bins = Array.from({ length: binCount }, (_, i) => {
      const start = min + i * binSize;
      const end = start + binSize;
      const count = arr.filter(v => (i === binCount - 1 ? v >= start && v <= max : v >= start && v < end)).length;
      return { label: `${start.toFixed(0)}-${end.toFixed(0)}`, count, start, end };
    });

    const maxBinCount = Math.max(...bins.map(b => b.count), 1);

    return { n, mean, median, variance, stdDev, min, max, range, q1, q3, iqr, bins, maxBinCount };
  }, [parsedNumbers]);

  // Compute Regression: y = mx + b
  const regression = useMemo(() => {
    const n = regDataPoints.length;
    if (n < 2) return null;

    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumXX = 0;
    let sumYY = 0;

    regDataPoints.forEach(p => {
      sumX += p.x;
      sumY += p.y;
      sumXY += p.x * p.y;
      sumXX += p.x * p.x;
      sumYY += p.y * p.y;
    });

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    // Correlation r
    const numerator = n * sumXY - sumX * sumY;
    const denominator = Math.sqrt((n * sumXX - sumX * sumX) * (n * sumYY - sumY * sumY));
    const r = denominator !== 0 ? numerator / denominator : 0;
    const rSquared = r * r;

    const predictedY = slope * predictX + intercept;

    return { slope, intercept, r, rSquared, predictedY };
  }, [regDataPoints, predictX]);

  const loadPreset = (key: DatasetKey) => {
    setSelectedPreset(key);
    setRawInput(PRESET_DATASETS[key].data.join(', '));
  };

  return (
    <section id="analytics-lab" className="py-20 border-b border-slate-800/80 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Demonstration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Live Analytics Playground
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-transparent mt-3 rounded-full" />
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'stats'
                  ? 'bg-sky-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Descriptive Statistics</span>
            </button>
            <button
              onClick={() => setActiveTab('regression')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'regression'
                  ? 'bg-sky-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Linear Regression</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Descriptive Statistics */}
        {activeTab === 'stats' && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            {/* Dataset Selector */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                Sample Datasets:
              </span>
              {(Object.keys(PRESET_DATASETS) as DatasetKey[]).map(key => (
                <button
                  key={key}
                  onClick={() => loadPreset(key)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    selectedPreset === key
                      ? 'bg-slate-800 border-sky-400/60 text-sky-300 font-medium'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {PRESET_DATASETS[key].name}
                </button>
              ))}
            </div>

            <p className="text-xs text-slate-400 italic mb-4">
              {PRESET_DATASETS[selectedPreset].description}
            </p>

            {/* Editable Data Input */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Raw Numerical Vector (comma-separated):
              </label>
              <textarea
                rows={2}
                value={rawInput}
                onChange={(e) => setRawInput(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-sky-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-mono text-sky-200 focus:outline-none transition-colors"
                placeholder="e.g. 42, 65, 58, 72, 61..."
              />
            </div>

            {/* Computed Statistics Cards */}
            {stats ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  <div className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Sample Size (n)</span>
                    <span className="text-lg font-bold text-white font-mono tabular-nums">{stats.n}</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Mean (μ)</span>
                    <span className="text-lg font-bold text-sky-300 font-mono tabular-nums">{stats.mean.toFixed(2)}</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Median (M)</span>
                    <span className="text-lg font-bold text-cyan-300 font-mono tabular-nums">{stats.median.toFixed(2)}</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Std Deviation (s)</span>
                    <span className="text-lg font-bold text-indigo-300 font-mono tabular-nums">{stats.stdDev.toFixed(2)}</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Variance (s²)</span>
                    <span className="text-lg font-bold text-slate-200 font-mono tabular-nums">{stats.variance.toFixed(2)}</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl">
                    <span className="text-[11px] text-slate-400 block mb-0.5">IQR (Q3 - Q1)</span>
                    <span className="text-lg font-bold text-slate-200 font-mono tabular-nums">{stats.iqr.toFixed(2)}</span>
                  </div>
                </div>

                {/* Live Distribution Histogram */}
                <div className="pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    Sample Frequency Distribution Bins
                  </h4>
                  <div className="grid grid-cols-5 gap-3 items-end h-32 pt-4 px-2 bg-slate-950/50 rounded-xl border border-slate-800/60">
                    {stats.bins.map((bin, idx) => {
                      const heightPercent = stats.maxBinCount > 0 ? (bin.count / stats.maxBinCount) * 100 : 0;
                      return (
                        <div key={idx} className="flex flex-col items-center h-full justify-end group">
                          <span className="text-[10px] text-slate-400 font-mono mb-1 group-hover:text-sky-300">
                            {bin.count}
                          </span>
                          <div 
                            style={{ height: `${Math.max(heightPercent, 8)}%` }}
                            className="w-full bg-gradient-to-t from-sky-600/70 to-cyan-400 rounded-t-md transition-all duration-300 group-hover:from-sky-500 group-hover:to-cyan-300"
                          />
                          <span className="text-[9px] sm:text-[10px] text-slate-500 font-mono mt-2 truncate w-full text-center">
                            {bin.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-xs text-rose-400">Please enter valid numeric values separated by commas.</p>
            )}
          </div>
        )}

        {/* Tab 2: Linear Regression Model */}
        {activeTab === 'regression' && regression && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Regression Metrics */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Linear Regression Formulation: Ŷ = mX + b
                  </h3>
                  <p className="text-xs text-slate-400">
                    Models the empirical correlation between independent predictor (X) and target metric (Y).
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Slope (m)</span>
                    <span className="text-base font-bold text-sky-300 font-mono tabular-nums">
                      {regression.slope.toFixed(3)}
                    </span>
                  </div>
                  <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Intercept (b)</span>
                    <span className="text-base font-bold text-cyan-300 font-mono tabular-nums">
                      {regression.intercept.toFixed(3)}
                    </span>
                  </div>
                  <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Correlation (r)</span>
                    <span className="text-base font-bold text-emerald-300 font-mono tabular-nums">
                      {regression.r.toFixed(3)}
                    </span>
                  </div>
                  <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl">
                    <span className="text-[11px] text-slate-400 block mb-0.5">R² Fit</span>
                    <span className="text-base font-bold text-indigo-300 font-mono tabular-nums">
                      {regression.rSquared.toFixed(3)}
                    </span>
                  </div>
                </div>

                {/* Live Predictor Slider / Input */}
                <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl">
                  <label className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-2">
                    <span>Forecast New Output for Predictor X = {predictX}</span>
                    <span className="font-mono text-sky-400 text-xs">m = {regression.slope.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={predictX}
                    onChange={(e) => setPredictX(parseFloat(e.target.value))}
                    className="w-full accent-sky-400 cursor-pointer mb-3"
                  />
                  <div className="flex items-center justify-between p-3 rounded-lg bg-sky-950/30 border border-sky-500/20">
                    <span className="text-xs text-slate-300">Estimated Target Output (Ŷ):</span>
                    <span className="text-base font-bold text-sky-300 font-mono tabular-nums">
                      {regression.predictedY.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Data Points Table */}
              <div className="lg:col-span-5 bg-slate-950/60 border border-slate-800 rounded-xl p-4">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Calibration Coordinates (X, Y)
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left font-mono">
                    <thead className="text-slate-500 border-b border-slate-800">
                      <tr>
                        <th className="py-1.5 px-2">Observation</th>
                        <th className="py-1.5 px-2">X Value</th>
                        <th className="py-1.5 px-2">Actual Y</th>
                        <th className="py-1.5 px-2">Fitted Ŷ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {regDataPoints.map((pt, idx) => {
                        const fitted = regression.slope * pt.x + regression.intercept;
                        return (
                          <tr key={idx} className="hover:bg-slate-800/40">
                            <td className="py-1.5 px-2 text-slate-500">#{idx + 1}</td>
                            <td className="py-1.5 px-2">{pt.x}</td>
                            <td className="py-1.5 px-2 text-sky-300">{pt.y}</td>
                            <td className="py-1.5 px-2 text-slate-400">{fitted.toFixed(1)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
