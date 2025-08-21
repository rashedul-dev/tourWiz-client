import { ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";

export default function Unauthorized() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-muted to-background">
      <div className="mx-auto flex h-screen max-w-3xl flex-col items-center justify-center p-6">
        <Card className="w-full border-border/60 shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10">
              <ShieldAlert className="h-8 w-8 text-destructive" aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl">Unauthorized</CardTitle>
            <CardDescription>You don’t have permission to view this page.</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-center text-sm text-muted-foreground">
              This resource requires additional privileges or an active session. If you think this is a mistake, try
              refreshing your credentials or return to a safe page.
            </p>

            <div className="mx-auto w-full max-w-sm rounded-xl bg-muted/50 p-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium">Status</span>
                <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-destructive">401</span>
              </div>
              <Separator className="my-3" />
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>Make sure you’re logged in.</li>
                <li>Ask an admin to grant you the required role.</li>
                <li>Try navigating back and reloading the page.</li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button variant="secondary" className="w-full sm:w-auto">
              <Link to="/">Go to Home</Link>
            </Button>
          </CardFooter>
        </Card>

        <p className="mt-6 text-center text-xs text-muted-foreground">Need access? Contact your workspace admin.</p>
      </div>
    </div>
  );
}
