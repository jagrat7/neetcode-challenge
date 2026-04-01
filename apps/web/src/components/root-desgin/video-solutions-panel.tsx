import { Play } from "lucide-react"

export function VideoSolutionsPanel() {
  const chapters = [
    { name: "Arrays", count: 9 },
    { name: "Two Pointers", count: 5 },
    { name: "Sliding Window", count: 6 },
    { name: "Stack", count: 7 },
    { name: "Binary Search", count: 7 },
    { name: "Trees", count: 11 },
    { name: "Graphs", count: 13 },
  ]

  return (
    <div className=" bg-white">
 
      {/* YouTube embed */}
      <div className="relative mb-4 aspect-video w-full overflow-hidden border-2 border-[#CBD5E1] bg-[#0F172A]">
        <iframe
          src="https://www.youtube.com/embed/lXVy6YWFcRM"
          title="NeetCode Video Solution"
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

    </div>
  )
}
