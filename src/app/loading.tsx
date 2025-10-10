'use client'

export default function Loading() {
  return (
    <div className="bg-primary flex items-center justify-center h-[100vh] w-[100vw]">
      <img className="min-lg:w-150" src="loading.gif" alt="" />
    </div>
  )
}