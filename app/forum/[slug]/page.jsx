import ChatForum from "@/components/ChatForum";

export default async function Page({ params }) {
  const { slug } = await params;
  return (
    <div className="h-[calc(100vh-64px)] w-full">
      <ChatForum slug={slug} />
    </div>
  );
}
