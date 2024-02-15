
import { Label } from "./Label"
import { Input } from "./Input"

export default function Component() {
  return (
    <form className="grid w-full max-w-sm items-center gap-4">
      <div>
        <Label htmlFor="title">Project Title</Label>
        <Input id="title" placeholder="Project Title" />
      </div>
      <div>
        <Label htmlFor="members">Team Members</Label>
        <Input id="members" placeholder="Team Members" />
      </div>
      <div>
        <Label htmlFor="abstract">Abstract</Label>
        <Input accept=".pdf" id="abstract" type="file" />
      </div>
      <div>
        <Label htmlFor="papers">Research Papers</Label>
        <Input id="papers" multiple type="file" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Upload one or more files. Supported file types: .pdf, .docx
        </p>
      </div>
    </form>
  )
}

