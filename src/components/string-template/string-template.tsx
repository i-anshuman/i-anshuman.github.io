import { ElementType } from "react";

type StringTemplateProps = {
  text: string;
  component?: ElementType;
};

export default function StringTemplate({ text, component: Component }: StringTemplateProps) {

  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match = null;

  const renderText = (text: string) => {
    while((match = pattern.exec(text))) {
      const startsAt = match.index;
      const endsAt = pattern.lastIndex;
      const link = match[1];
      const url = match[2];
      parts.push(text.slice(lastIndex, startsAt));
      parts.push(
        Component
        ? <Component key={startsAt} href={url} target="_blank" rel="noreferrer">{link}</Component>
        : <a key={startsAt} href={url} target="_blank" rel="noreferrer">{link}</a>
      );
      lastIndex = endsAt;
    }

    parts.push(text.slice(lastIndex));
    return parts;
  };
  
  return (
    <>
      { renderText(text) }
    </>
  );
}
