import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function Home() {
  return (
      <Tabs>
          <TabsList className="mb-4">
              <TabsTrigger value="employees">Expenses</TabsTrigger>
              <TabsTrigger value="teams">Graphs</TabsTrigger>
          </TabsList>
          <TabsContent value="employees">
              {"Expenses"}
          </TabsContent>
          <TabsContent value="teams">{"Grapsh"}</TabsContent>
      </Tabs>
  );
}
