import React from 'react';
import TimelineTasks from '../components/dashboard/TimelineTasks';
import Header from '../components/common/Header';
import BottomNav from '../components/common/BottomNav';

export default function Timeline() {
  return (
    <div className="min-h-screen bg-[#18191A] flex flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <TimelineTasks />
      </main>
      <BottomNav active="tasks" />
    </div>
  );
}
