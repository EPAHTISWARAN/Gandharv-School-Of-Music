import Container from "../Container";

export default function PageBanner({
title,
subtitle,
}) {
return ( <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] py-24 text-white"> <Container> <div className="text-center"> <h1 className="font-heading text-4xl font-bold md:text-5xl">
{title} </h1>


      {subtitle && (
        <p className="mt-4 text-lg text-white/80">
          {subtitle}
        </p>
      )}
    </div>
  </Container>
</section>


);
}
