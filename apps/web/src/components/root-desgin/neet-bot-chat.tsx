import { Bot, ArrowRight } from "lucide-react"

export function NeetBotChat() {
  return (
    <div className="h-[340px] border-2 border-dashed border-[#CBD5E1] bg-white p-5">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex size-6 items-center justify-center border border-[#16A34A] bg-[#16A34A]/10">
          <Bot className="size-3.5 text-[#16A34A]" />
        </div>
        <span className="text-sm font-bold text-[#16A34A]">NeetBot AI</span>
        <span className="text-[10px] text-[#94A3B8]">Your AI coding tutor</span>
      </div>

      <div className="space-y-3">
        <div className="flex justify-end">
          <div
            className="max-w-[75%] border-2 border-dashed border-[#CBD5E1] bg-[#FAFAFA] px-3 py-2 text-xs text-[#475569]"
            style={{ transform: "rotate(0.5deg)" }}
          >
            I'm stuck on Two Sum. I keep getting O(n²)...
          </div>
        </div>

        <div className="flex justify-start">
          <div
            className="max-w-[80%] border-2 border-[#16A34A]/30 bg-[#16A34A]/5 px-3 py-2 text-xs leading-relaxed text-[#475569]"
            style={{ transform: "rotate(-0.3deg)" }}
          >
            <p>Think about what data structure lets you check if a <span className="font-semibold text-[#1E293B]">complement exists in O(1)</span>...</p>
            <p className="mt-1.5">Hint: You've already seen the number, you just need to <span className="font-semibold text-[#16A34A]">remember</span> it.</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div
            className="max-w-[75%] border-2 border-dashed border-[#CBD5E1] bg-[#FAFAFA] px-3 py-2 text-xs text-[#475569]"
            style={{ transform: "rotate(0.3deg)" }}
          >
            Oh! A hashmap for O(1) lookup!
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-dashed border-[#CBD5E1] pt-3">
        <div className="flex-1 border border-[#CBD5E1] bg-[#FAFAFA] px-3 py-2 text-xs text-[#94A3B8]">
          Ask NeetBot anything...
        </div>
        <button className="flex size-8 items-center justify-center border-2 border-[#16A34A] bg-[#16A34A] text-white">
          <ArrowRight className="size-3.5" />
        </button>
      </div>
    </div>
  )
}
