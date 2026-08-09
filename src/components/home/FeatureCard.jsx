import GlassCard from "../common/GlassCard";

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <GlassCard className="text-center h-full">

      <div className="flex justify-center">
        <Icon
          size={42}
          className="text-cyan-400"
        />
      </div>

      <h3 className="mt-6 text-2xl font-semibold">
        {feature.title}
      </h3>

      <p className="mt-4 text-gray-400 leading-7">
        {feature.description}
      </p>

    </GlassCard>
  );
};

export default FeatureCard;