interface KeynoteProps {
  title: string;
  description: string;
}

const Keynote: React.FC<KeynoteProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col">
      <p className="font-semibold">{title}</p>
      <p className="font-mono text-sm italic text-gray-400">{description}</p>
    </div>
  );
};

export default Keynote;
