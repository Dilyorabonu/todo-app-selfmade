import DeleteModal from "@/components/DeleteModal";
import Header from "@/components/Header";
import InfoDialog from "@/components/InfoDialog";
import Tasks from "@/components/Tasks";
import TodoModal from "@/components/TodoModal";

export default function page() {
  return (
    <>
      <Header />
      <main>
        <Tasks />
      </main>
      <TodoModal />
      <DeleteModal />
      <InfoDialog />
    </>
  );
}
