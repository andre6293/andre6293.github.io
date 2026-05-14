export default function ThreeDPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">3D</h1>

      <p className="text-zinc-400">
        Blender renders and procedural experiments.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <img src="/images/render1.jpg" alt="render" />
        <img src="/images/render2.jpg" alt="render" />
      </div>
    </section>
  );
}
