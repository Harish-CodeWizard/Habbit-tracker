import MainLayout from '../components/layout/MainLayout';

const Calendar = () => (
	<MainLayout>
		<div>
			<h1 className="text-3xl font-bold text-gray-900 mb-6">Calendar</h1>
			<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
				<div className="grid grid-cols-7 gap-2 text-sm text-gray-600 mb-4">
					{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=> (
						<div key={d} className="text-center font-semibold text-gray-700">{d}</div>
					))}
				</div>
				<div className="grid grid-cols-7 gap-2">
					{Array.from({length:35}).map((_,i)=> (
						<div key={i} className="h-16 border border-gray-200 rounded-lg p-1 text-xs font-medium flex items-start justify-end text-gray-700 hover:bg-violet-50 cursor-pointer">{i+1}</div>
					))}
				</div>
			</div>
		</div>
	</MainLayout>
);

export default Calendar;
