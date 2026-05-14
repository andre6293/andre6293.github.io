export default function MusicPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Music</h1>

      <p className="text-zinc-400">
        Sound design, production, and experiments.
      </p>

      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/artist/YOUR_ID"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </section>
  );
}
