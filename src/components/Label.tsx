type LabelProps = {
  text: string;
  htmlFor?: string;
};

export default function Label({ text, htmlFor }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className='block text-gold-sm font-medium mb-2 text-light_sea_green-400'>
      {text}
    </label>
  );
}
