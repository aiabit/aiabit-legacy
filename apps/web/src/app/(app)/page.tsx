import { Button } from 'antd'

export const runtime = "edge";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center">
      <div className="container mt-12 flex flex-col items-center justify-center gap-4 py-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Aiabit
        </h1>
        <Button>Test</Button>
        {/* <AuthShowcase /> */}
        {/* <CreatePostForm /> */}
        {/* <div className="h-[40vh] w-full max-w-2xl overflow-y-scroll"> */}
        {/* <Suspense
            fallback={
              <div className="flex w-full flex-col gap-4">
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton />
              </div>
            }
          >
            <PostList />
          </Suspense> */}
        {/* </div> */}
      </div>
    </main>
  );
}
