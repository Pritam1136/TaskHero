import { signInAction } from "@/actions/auth-actions";
import Tasks from "@/components/todovex/tasks";
import UserProfile from "@/components/todovex/user-profile";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>You are loggedin......</h1>
      <UserProfile />
      <Tasks />
    </main>
  );
}
