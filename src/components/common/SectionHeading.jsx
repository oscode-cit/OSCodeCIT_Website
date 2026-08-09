import SectionBadge from "./SectionBadge";

const SectionHeading = ({ badge, title, description }) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <SectionBadge>{badge}</SectionBadge>

      <h2 className="mt-5 text-5xl font-bold">{title}</h2>

      <p className="mt-6 leading-8 text-gray-400">{description}</p>
    </div>
  );
};

export default SectionHeading;
