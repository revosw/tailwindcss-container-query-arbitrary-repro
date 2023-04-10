This repository demonstrates that something's fishy when using arbitrary values.

The example shown is using `md:grid-cols-[300px_1fr]`. When prepending `md:`, it works as expected. When prepending `@md:`, the style is not applied at all.

```
<!-- ✅ Properly applies the arbitrary value -->
<div key={i} className="@container grid md:grid-cols-[300px_1fr] gap-2 mb-6 last:mb-0">
    <img src="https://picsum.photos/320/180" className='rounded-lg @lg:row-span-3' />
    <input className='bg-slate-200 border-slate-700 border-2 rounded-sm @lg:col-start-2' type="text" placeholder='Name' />
    <input className='bg-slate-200 border-slate-700 border-2 rounded-sm' type="text" placeholder='Price'/>
    <textarea className='bg-slate-200 border-slate-700 border-2 rounded-sm' placeholder='Description'></textarea>
</div>

<!-- ❌ Arbitrary value is not applied -->
<div key={i} className="@container grid @md:grid-cols-[300px_1fr] gap-2 mb-6 last:mb-0">
    <img src="https://picsum.photos/320/180" className='rounded-lg @lg:row-span-3' />
    <input className='bg-slate-200 border-slate-700 border-2 rounded-sm @lg:col-start-2' type="text" placeholder='Name' />
    <input className='bg-slate-200 border-slate-700 border-2 rounded-sm' type="text" placeholder='Price'/>
    <textarea className='bg-slate-200 border-slate-700 border-2 rounded-sm' placeholder='Description'></textarea>
</div>
```
