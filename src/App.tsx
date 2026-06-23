/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Panel, Group as PanelGroup, Separator as PanelResizeHandle } from 'react-resizable-panels';
import { Toaster, toast } from 'sonner';
import { CardState, HoveredElement, DEFAULT_STATE, DEFAULT_STATE_STATS, DEFAULT_STATE_PRODUCT, DEFAULT_STATE_BLOG, DEFAULT_STATE_PROFILE } from './types';
import { ControlsPanel } from './components/ControlsPanel';
import { CardPreview } from './components/CardPreview';
import { CodePanel } from './components/CodePanel';
import { 
  headerBgOptions, headerHeightOptions,
  titleSizeOptions, titleWeightOptions, titleColorOptions, titleTrackingOptions, titleLeadingOptions,
  metaSizeOptions, metaLabelColorOptions, metaValueColorOptions, metaSpacingOptions,
  paddingOptions, marginOptions,
  bgOptions, borderOptions, radiusOptions, shadowOptions
} from './data/options';
import { GripVertical, GripHorizontal, Link as LinkIcon } from 'lucide-react';

export default function App() {
  const [state, setState] = useState<CardState>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const encodedState = params.get('state');
      if (encodedState) {
        return JSON.parse(atob(encodedState));
      }
    } catch(e) {
      console.warn("Failed to parse state from URL", e);
    }
    return DEFAULT_STATE;
  });
  
  const [hoveredElement, setHoveredElement] = useState<HoveredElement>(null);
  const [lastChange, setLastChange] = useState<{ label: string; value: string; prop: string } | null>(null);
  
  // Quick mapping from stateKey to property conceptual name
  const propertyMap: Record<string, string> = {
    headerBg: 'Background / Gradient',
    headerHeight: 'Height',
    titleSize: 'Font Size',
    titleWeight: 'Font Weight',
    titleColor: 'Text Color',
    titleTracking: 'Letter Spacing',
    titleLeading: 'Line Height',
    metaSize: 'Font Size',
    metaLabelColor: 'Text Color',
    metaValueColor: 'Text Color',
    spacing: 'Vertical Spacing',
    cardPadding: 'Padding',
    cardMargin: 'Margin',
    cardBg: 'Background Color',
    cardBorder: 'Border Color',
    cardRadius: 'Border Radius',
    cardShadow: 'Box Shadow',
  };

  const updateState = (key: keyof CardState | 'cardType', value: string, label: string) => {
    if (key === 'cardType') {
      let newState = DEFAULT_STATE_STATS;
      if (value === 'product') newState = DEFAULT_STATE_PRODUCT;
      if (value === 'blog') newState = DEFAULT_STATE_BLOG;
      if (value === 'profile') newState = DEFAULT_STATE_PROFILE;
      setState(newState);
      setLastChange({ label: 'Card Type', value: value, prop: 'Template' });
      return;
    }
    setState((prev) => ({ ...prev, [key]: value }));
    setLastChange({
      label,
      value,
      prop: propertyMap[key] || 'Property',
    });
  };

  const handleReset = () => {
    updateState('cardType', state.cardType, 'Card Type');
    setLastChange(null);
    setHoveredElement(null);
  };

  const getRandomOption = (options: { value: string }[]) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex].value;
  };

  const handleRandomize = () => {
    setState((prev) => ({
      ...prev,
      headerBg: getRandomOption(headerBgOptions),
      headerHeight: getRandomOption(headerHeightOptions),
      titleSize: getRandomOption(titleSizeOptions),
      titleWeight: getRandomOption(titleWeightOptions),
      titleColor: getRandomOption(titleColorOptions),
      titleTracking: getRandomOption(titleTrackingOptions),
      titleLeading: getRandomOption(titleLeadingOptions),
      metaSize: getRandomOption(metaSizeOptions),
      metaLabelColor: getRandomOption(metaLabelColorOptions),
      metaValueColor: getRandomOption(metaValueColorOptions),
      spacing: getRandomOption(metaSpacingOptions),
      cardPadding: getRandomOption(paddingOptions),
      cardMargin: getRandomOption(marginOptions),
      cardBg: getRandomOption(bgOptions),
      cardBorder: getRandomOption(borderOptions),
      cardRadius: getRandomOption(radiusOptions),
      cardShadow: getRandomOption(shadowOptions),
    }));
    setLastChange(null);
  };

  const shareLink = () => {
    const encodedState = btoa(JSON.stringify(state));
    const url = new URL(window.location.href);
    url.searchParams.set('state', encodedState);
    navigator.clipboard.writeText(url.toString());
    toast.success('Shareable link copied to clipboard');
  };

  return (
    <div className="h-screen w-full bg-slate-100 flex flex-col overflow-hidden font-sans antialiased text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-indigo-200/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-rose-200/30 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[40%] h-[40%] bg-emerald-200/20 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="px-6 py-3 bg-white/70 backdrop-blur-xl border-b border-slate-300 flex-shrink-0 flex items-center justify-between z-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Tailwind Card Playground</h1>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-0.5">Learn by Changing Classes</p>
        </div>
        
        <div className="flex items-center gap-4">
          {lastChange && (
            <div className="hidden md:flex animate-in fade-in slide-in-from-top-2 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-2 items-center gap-3 w-80">
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">{lastChange.label} Changed</p>
                <p className="text-xs text-emerald-900 truncate font-medium">
                  New class: <code className="font-mono bg-emerald-100 px-1.5 py-0.5 rounded text-emerald-700">{lastChange.value}</code>
                </p>
              </div>
            </div>
          )}
          <button 
            onClick={shareLink}
            className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium transition-colors border border-indigo-200"
          >
            <LinkIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Copy Shareable Link</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden z-10 relative">
        <PanelGroup orientation="horizontal" className="z-10 h-full">
          <Panel defaultSize={30} minSize={20} className="z-20 bg-white/70 backdrop-blur-xl border-r border-white flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
            <ControlsPanel
              state={state}
              updateState={updateState}
              setHoveredElement={setHoveredElement}
              onReset={handleReset}
              onRandomize={handleRandomize}
              lastChange={lastChange}
            />
          </Panel>

          <PanelResizeHandle className="w-1 bg-white/50 border-r border-white/50 cursor-col-resize hover:bg-indigo-400 transition-colors z-30 shadow-[1px_0_2px_rgba(0,0,0,0.02)] active:bg-indigo-500" />

          <Panel defaultSize={70} minSize={30} className="flex flex-col relative bg-transparent h-full">
            <PanelGroup orientation="vertical" className="h-full">
              <Panel defaultSize={70} minSize={25} className="flex flex-col relative w-full h-full">
                <CardPreview 
                  state={state}
                  hoveredElement={hoveredElement}
                  setHoveredElement={setHoveredElement}
                />
              </Panel>

              <PanelResizeHandle className="h-1 bg-white/50 border-b border-indigo-900/10 cursor-row-resize hover:bg-indigo-400 transition-colors z-30 active:bg-indigo-500" />

              <Panel defaultSize={50} minSize={25} className="flex h-full">
                 <CodePanel state={state} lastChanged={lastChange?.value || null} />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
