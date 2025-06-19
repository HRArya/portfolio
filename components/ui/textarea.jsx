import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, onChange, ...props }, ref) => {
  const innerRef = React.useRef(null)

  // Merge forwarded ref with local ref
  React.useImperativeHandle(ref, () => innerRef.current)

  const handleChange = (e) => {
    if (innerRef.current) {
      innerRef.current.style.height = "auto" // reset
      innerRef.current.style.height = innerRef.current.scrollHeight + "px" // adjust
    }

    // Call user-provided onChange
    if (onChange) {
      onChange(e)
    }
  }

  React.useEffect(() => {
    if (innerRef.current) {
      innerRef.current.style.height = "auto"
      innerRef.current.style.height = innerRef.current.scrollHeight + "px"
    }
  }, [])

  return (
    <textarea
      ref={innerRef}
      onChange={handleChange}
      rows={1}
      className={cn(
        "flex w-full resize-none overflow-hidden border-0 border-b border-muted-foreground bg-transparent px-0 py-1 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
})

Textarea.displayName = "Textarea"

export { Textarea }
