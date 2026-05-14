export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>

      <ul className="space-y-2">
        <li>
          <a
            href="mailto:andrepinto@mailfence.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            E-mail
          </a>
        </li>
        <li>
          <a
            href="https://github.com/andre6293"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pinto-andre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
}
