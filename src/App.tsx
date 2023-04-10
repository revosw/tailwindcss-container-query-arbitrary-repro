import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

    const [numRows, setNumRows] = useState(1)

    function addRow() {
        setNumRows((state) => state + 1)
    }

    return (
        <>
            {[...Array(numRows)].map((_, i) => (
                <div key={i} className="@container grid md:grid-cols-[300px_1fr] gap-2 mb-6 last:mb-0">
                    <img src="https://picsum.photos/320/180" className='rounded-lg @lg:row-span-3' />
                    <input className='bg-slate-200 border-slate-700 border-2 rounded-sm @lg:col-start-2' type="text" placeholder='Name' />
                    <input className='bg-slate-200 border-slate-700 border-2 rounded-sm' type="text" placeholder='Price'/>
                    <textarea className='bg-slate-200 border-slate-700 border-2 rounded-sm' placeholder='Description'></textarea>
                </div>
            ))}
            <button className="bg-slate-400 text-slate-100 border-slate-700 border-2 rounded-md py-2 px-4" onClick={addRow}>Add new info row</button>
        </>
    )
}

export default App
