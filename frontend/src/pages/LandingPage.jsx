import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, TrendingUp } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-violet-50">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        {/* Header */}
        <nav className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-2 text-2xl font-bold text-violet-600">H</div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-900">Log in</Link>
            <Link to="/signup" className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700">Sign up</Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Build Habits That Stick</h1>
            <p className="text-xl text-gray-600 mb-8">Stay consistent, track progress, and transform your life with our simple yet powerful habit tracker.</p>
            <Link to="/signup" className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 via-violet-700 to-teal-600 text-white px-8 py-3 rounded-lg hover:opacity-95">
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
          <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl h-80 flex items-center justify-center">
            <div className="text-center">
              <Zap size={48} className="mx-auto text-violet-600 mb-4" />
              <p className="text-gray-600">Transform Your Habits</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: <CheckCircle className="text-violet-600" />, title: 'Easy Tracking', desc: 'Simple and intuitive interface' },
            { icon: <TrendingUp className="text-violet-600" />, title: 'Progress Analytics', desc: 'Visualize your improvement' },
            { icon: <Zap className="text-violet-600" />, title: 'Stay Motivated', desc: 'Celebrate streaks and wins' }
          ].map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="mb-3">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
          <p className="mb-6 text-violet-100">Join thousands building better habits every day</p>
          <Link to="/signup" className="inline-block bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-violet-50">Create Your Account</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
