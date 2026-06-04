"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import GradientBg from '../../components/gradient-bg';
import LeafletMap from '../../components/leaflet-map';

interface MapMarker {
  id: string | number;
  lat: number;
  lng: number;
  title: string;
  category: string;
}

export default function SmartMapPage() {
  const [markers, setMarkers] = useState<MapMarker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [tourRes, culinaryRes] = await Promise.all([
          fetch('http://localhost:4000/api/tourism'),
          fetch('http://localhost:4000/api/culinary')
        ]);

        const tours = await tourRes.json();
        const culinary = await culinaryRes.json();

        const tourMarkers = tours.map((item: any) => ({
          id: item.id,
          lat: item.latitude,
          lng: item.longitude,
          title: item.name,
          category: 'Wisata'
        }));

        const culinaryMarkers = culinary.map((item: any, index: number) => ({
          id: `culinary-${item.id ?? index}`,
          lat: item.latitude ?? -7.6079,
          lng: item.longitude ?? 110.2038,
          title: item.name,
          category: 'Kuliner'
        }));

        setMarkers([...tourMarkers, ...culinaryMarkers]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <GradientBg>
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-white">Smart Interactive Map</h1>
          <p className="mt-4 text-xl text-slate-300">Jelajahi lokasi wisata, kuliner, dan fasilitas kota di peta interaktif</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-3xl border border-slate-800 bg-slate-900/30 p-6 backdrop-blur-xl">
          {loading ? (
            <div className="aspect-[16/9] flex items-center justify-center rounded-3xl bg-slate-800">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 rounded-full border-4 border-cyan-500/30 border-t-cyan-500" />
                <p className="text-slate-400">Memuat peta...</p>
              </motion.div>
            </div>
          ) : (
            <>
              <LeafletMap markers={markers} />
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-2xl bg-slate-900/50 p-4 text-center">
                  <p className="text-3xl">🏛️</p>
                  <p className="mt-2 text-sm font-semibold text-slate-300">{markers.filter(m => m.category === 'Wisata').length} Wisata</p>
                </div>
                <div className="rounded-2xl bg-slate-900/50 p-4 text-center">
                  <p className="text-3xl">🍜</p>
                  <p className="mt-2 text-sm font-semibold text-slate-300">{markers.filter(m => m.category === 'Kuliner').length} Kuliner</p>
                </div>
                <div className="rounded-2xl bg-slate-900/50 p-4 text-center">
                  <p className="text-3xl">🏨</p>
                  <p className="mt-2 text-sm font-semibold text-slate-300">Hotel & Homestay</p>
                </div>
                <div className="rounded-2xl bg-slate-900/50 p-4 text-center">
                  <p className="text-3xl">🏥</p>
                  <p className="mt-2 text-sm font-semibold text-slate-300">Fasilitas Medis</p>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </section>

      <Footer />
    </GradientBg>
  );
}
