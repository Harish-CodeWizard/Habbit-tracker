import MainLayout from '../components/layout/MainLayout';

const Calendar = () => (
	<MainLayout>
		<div className="p-6">
			<h1 className="text-2xl font-semibold text-violet-700 mb-4">Calendar</h1>
			<div className="bg-white p-4 rounded-xl shadow-sm border">
				<div className="grid grid-cols-7 gap-2 text-sm text-gray-600">
					{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=> (
						<div key={d} className="text-center font-medium">{d}</div>
					))}
				</div>
				<div className="grid grid-cols-7 gap-2 mt-3">
					{Array.from({length:35}).map((_,i)=> (
						<div key={i} className="h-20 border rounded p-2 text-sm">{i+1}</div>
					))}
				</div>
			</div>
		</div>
	</MainLayout>
);

export default Calendar;
