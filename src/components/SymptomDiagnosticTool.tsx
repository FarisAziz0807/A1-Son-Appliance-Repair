import React, { useState } from 'react';
import { Wrench, AlertTriangle, CheckCircle2, Phone, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface SymptomData {
  appliance: string;
  symptoms: {
    name: string;
    probableCause: string;
    urgency: 'High' | 'Medium' | 'Low';
    recommendation: string;
  }[];
}

const DIAGNOSTIC_DATABASE: SymptomData[] = [
  {
    appliance: 'Refrigerator',
    symptoms: [
      {
        name: 'Fresh food section warm, but freezer cold',
        probableCause: 'Defrost system failure, frozen evaporator coils, or faulty damper motor',
        urgency: 'High',
        recommendation: 'Check that air vents are unobstructed. Defrosting or bi-metal sensor replacement typically restores airflow.'
      },
      {
        name: 'Clicking sound from back every 2 minutes & no cooling',
        probableCause: 'Defective compressor start relay, capacitor, or seized compressor',
        urgency: 'High',
        recommendation: 'Compressor start relay failure is common and very affordable to replace before compressor damage occurs.'
      },
      {
        name: 'Water leaking onto floor under front doors',
        probableCause: 'Clogged defrost drain tube, cracked water line, or faulty filter manifold',
        urgency: 'Medium',
        recommendation: 'Defrost drain clearing or inlet valve replacement quickly resolves pooling water.'
      }
    ]
  },
  {
    appliance: 'LG Refrigerator',
    symptoms: [
      {
        name: 'LG Linear compressor silent or humming but box warming',
        probableCause: 'LG linear compressor valve breakdown or software MCU firmware mismatch',
        urgency: 'High',
        recommendation: 'Requires specialized LG linear compressor replacement, nitrogen brazing, and MCU software flash.'
      },
      {
        name: 'Error code 22 or 67 on LG front display',
        probableCause: 'Compressor inverter signal failure or compressor overload trip',
        urgency: 'High',
        recommendation: 'Sealed system diagnostic and inverter circuit testing recommended.'
      }
    ]
  },
  {
    appliance: 'Sub-Zero Luxury System',
    symptoms: [
      {
        name: 'Vacuum Condenser light illuminated or Service wrench icon',
        probableCause: 'Restricted condenser airflow, lint buildup, or evaporator temperature sensor drift',
        urgency: 'Medium',
        recommendation: 'Condenser coil cleaning and microprocessor sensor calibration needed.'
      },
      {
        name: 'Freezer temperature rising above 10°F',
        probableCause: 'Dedicated freezer compressor cycle fault or defrost heater open circuit',
        urgency: 'High',
        recommendation: 'Dual-compressor isolation test to protect food inventory.'
      }
    ]
  },
  {
    appliance: 'Washing Machine',
    symptoms: [
      {
        name: 'Washer stops with water inside & won’t drain (Error OE / 5E)',
        probableCause: 'Foreign object in drain pump filter, jammed impeller, or burnt pump motor',
        urgency: 'High',
        recommendation: 'Drain pump inspection and electrical check resolves drain stalls fast.'
      },
      {
        name: 'Violent banging / vibration during high speed spin',
        probableCause: 'Worn suspension rods, broken shock absorbers, or unbalanced tub bearings',
        urgency: 'Medium',
        recommendation: 'Replacing heavy-duty suspension dampening rods eliminates spin vibrations.'
      }
    ]
  },
  {
    appliance: 'Dryer',
    symptoms: [
      {
        name: 'Dryer tumbles normally but produces zero heat',
        probableCause: 'Blown thermal fuse, broken heating element coil, or failed gas igniter',
        urgency: 'Medium',
        recommendation: 'Thermal fuse & element testing safely restores full heating power.'
      },
      {
        name: 'Loud squeaking, screeching, or thumping while running',
        probableCause: 'Hardened drum support rollers, worn idler pulley, or frayed drive belt',
        urgency: 'Low',
        recommendation: 'Standard tune-up roller kit replacement restores quiet, smooth tumbling.'
      }
    ]
  },
  {
    appliance: 'Oven & Stove',
    symptoms: [
      {
        name: 'Gas oven takes 15+ minutes to light or doesn’t heat',
        probableCause: 'Weak glow-bar silicon carbide igniter drawing insufficient amperage',
        urgency: 'Medium',
        recommendation: 'Replacing the hot surface igniter restores instant 60-second gas ignition.'
      },
      {
        name: 'Surface burner clicks continuously even when turned off',
        probableCause: 'Moisture in spark switch harness or defective rotary spark module',
        urgency: 'Medium',
        recommendation: 'Harness drying or spark module replacement stops endless clicking.'
      }
    ]
  }
];

interface SymptomDiagnosticToolProps {
  onOpenBooking: () => void;
}

export const SymptomDiagnosticTool: React.FC<SymptomDiagnosticToolProps> = ({ onOpenBooking }) => {
  const [selectedAppliance, setSelectedAppliance] = useState<string>('Refrigerator');
  const [selectedSymptomIndex, setSelectedSymptomIndex] = useState<number>(0);

  const activeApplianceData = DIAGNOSTIC_DATABASE.find(d => d.appliance === selectedAppliance) || DIAGNOSTIC_DATABASE[0];
  const activeSymptom = activeApplianceData.symptoms[selectedSymptomIndex] || activeApplianceData.symptoms[0];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200">
            <Wrench className="w-3.5 h-3.5 text-red-600" />
            Interactive Diagnostic Assistant
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Appliance Symptom Checker
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Select your machine and symptom below to see probable causes and recommended repair pathways before calling our Burien technicians.
          </p>
        </div>

        {/* Diagnostic Tool Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          
          {/* Step 1: Appliance Selector Tabs */}
          <div className="mb-6">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
              1. Select Your Broken Appliance:
            </label>
            <div className="flex flex-wrap gap-2">
              {DIAGNOSTIC_DATABASE.map((item) => (
                <button
                  key={item.appliance}
                  onClick={() => {
                    setSelectedAppliance(item.appliance);
                    setSelectedSymptomIndex(0);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedAppliance === item.appliance
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                  }`}
                >
                  {item.appliance}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Symptom Selector & Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: Symptoms list */}
            <div className="lg:col-span-5 space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
                2. Select Observed Symptom:
              </label>
              <div className="space-y-2">
                {activeApplianceData.symptoms.map((symptom, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSymptomIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-bold transition-all border flex items-start gap-2.5 cursor-pointer ${
                      selectedSymptomIndex === idx
                        ? 'bg-white border-red-500 text-slate-900 shadow-md ring-1 ring-red-500'
                        : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full mt-1 shrink-0 ${
                      selectedSymptomIndex === idx ? 'bg-red-600' : 'bg-slate-300'
                    }`} />
                    <span>{symptom.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Technical Diagnosis Card */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-black uppercase tracking-wider text-red-600">
                  Diagnostic Breakdown
                </span>
                <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                  activeSymptom.urgency === 'High' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {activeSymptom.urgency} Priority Repair
                </span>
              </div>

              <div>
                <h4 className="text-base font-extrabold text-slate-900 mb-1">
                  {activeSymptom.name}
                </h4>
                <div className="text-xs text-slate-500 font-semibold mb-2">
                  Probable Root Cause:
                </div>
                <div className="p-3 bg-red-50/50 rounded-xl border border-red-100 text-xs sm:text-sm font-semibold text-slate-800">
                  {activeSymptom.probableCause}
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-500 font-semibold mb-1">
                  Professional Recommendation:
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeSymptom.recommendation}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full sm:w-auto py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call to Schedule Fix</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Request On-Site Inspection
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
