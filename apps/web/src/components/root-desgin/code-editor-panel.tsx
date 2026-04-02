import { Play, Code2 } from "lucide-react"

export function CodeEditorPanel() {
  return (
    <div className="flex h-[340px] flex-col border-2 border-dashed border-[#CBD5E1] bg-[#FAFAFA]">
      <div className="flex items-center justify-between border-b border-dashed border-[#CBD5E1] bg-white px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center border border-[#CA8A04] bg-[#CA8A04]/10">
            <Code2 className="size-3.5 text-[#CA8A04]" />
          </div>
          <span className="text-sm font-bold text-[#CA8A04]" >two_sum.py</span>
          <span className="text-[10px] text-[#94A3B8]">Interactive Editor</span>
        </div>
        <div className="flex gap-1.5">
          <div className="size-2 rounded-full border border-[#CBD5E1] bg-[#F1F5F9]" />
          <div className="size-2 rounded-full border border-[#CBD5E1] bg-[#F1F5F9]" />
          <div className="size-2 rounded-full border border-[#CBD5E1] bg-[#F1F5F9]" />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden p-4">
        <div className="flex w-6 flex-col pr-3 text-right font-mono text-xs text-[#94A3B8] opacity-50 select-none">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="leading-relaxed">{i + 1}</span>
          ))}
        </div>
        <div className="flex-1 font-mono text-[11px] leading-relaxed text-[#475569]">
          <div><span className="font-semibold text-[#CA8A04]">class</span> <span className="text-[#1E293B]">Solution:</span></div>
          <div className="pl-4"><span className="font-semibold text-[#CA8A04]">def</span> <span className="text-[#2563EB]">twoSum</span>(self, nums, target):</div>
          <div className="mt-1 pl-8 text-[#94A3B8] italic"># hash map to store val : index</div>
          <div className="pl-8">prevMap = {"{}"}</div>
          <div className="mt-1.5 pl-8"><span className="font-semibold text-[#CA8A04]">for</span> i, n <span className="font-semibold text-[#CA8A04]">in</span> enumerate(nums):</div>
          <div className="pl-12">diff = target - n</div>
          <div className="mt-1.5 pl-12"><span className="font-semibold text-[#CA8A04]">if</span> diff <span className="font-semibold text-[#CA8A04]">in</span> prevMap:</div>
          <div className="pl-16"><span className="font-semibold text-[#CA8A04]">return</span> [prevMap[diff], i]</div>
          <div className="mt-1.5 pl-12">prevMap[n] = i</div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-dashed border-[#CBD5E1] bg-white px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex size-2 items-center justify-center rounded-full bg-[#16A34A]" />
          <span className="text-[10px] font-mono text-[#94A3B8]">Python 3 Ready</span>
        </div>
        <button className="flex items-center gap-1.5 border-2 border-[#CA8A04] bg-[#CA8A04] px-3 py-1.5 text-xs font-bold text-white transition-transform hover:-translate-y-0.5">
          <Play className="size-3 fill-white" />
          <span>Run</span>
        </button>
      </div>
    </div>
  )
}
