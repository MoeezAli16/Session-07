import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle,CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FormSectionProps {
  projectName: string;
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
  framework: string;
  setFramework: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const FormSection: React.FC<FormSectionProps> = ({ projectName, setProjectName, framework, setFramework, handleSubmit }) => (
  <div className="justify-center flex ">
  <Card className="w-[350px] mt-4 ">
    <CardHeader>
      <CardTitle>Assign Projects</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Name of your project"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Framework</Label>
            <Select value={framework} onValueChange={(value) => setFramework(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt.js</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <CardFooter className="flex justify-between pt-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit">Deploy</Button>
        </CardFooter>
      </form>
    </CardContent>
  </Card>
  </div>
);

export default FormSection;
