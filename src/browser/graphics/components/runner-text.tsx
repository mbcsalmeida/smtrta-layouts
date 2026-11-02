import { useEffect, useMemo, useState } from "react";
import Bluesky from "../img/icons/bluesky.png";
import Twitch from "../img/icons/twitch.png";
import { AutoTextSize } from "auto-text-size";

type Props = {
  bluesky?: string;
  className?: string;
  name: string;
  pronouns?: string;
  textSize?: string;
  twitch?: string;
};

export const RunnerText = ({
  name,
  className,
  textSize,
  twitch,
  bluesky,
}: Props) => {
  const [index, setIndex] = useState(0);

  const slides = useMemo(() => {
    const items = [];

    items.push({
      key: "name",
      content: (
        <AutoTextSize mode="box" minFontSizePx={18} maxFontSizePx={36}>
          <span className="drop-shadow-xs drop-shadow-black">{name}</span>
        </AutoTextSize>
      ),
    });

    if (twitch) {
      items.push({
        key: "twitch",
        content: (
          <>
            <img
              className="h-6 drop-shadow-xs drop-shadow-black"
              src={Twitch}
              alt="Twitch"
            />
            <AutoTextSize mode="box" minFontSizePx={18} maxFontSizePx={36}>
              <span className="drop-shadow-xs drop-shadow-black">{twitch}</span>
            </AutoTextSize>
          </>
        ),
      });
    }

    if (bluesky) {
      items.push({
        key: "bluesky",
        content: (
          <>
            <img
              className="h-6 drop-shadow-xs drop-shadow-black"
              src={Bluesky}
              alt="Bluesky"
            />
            <AutoTextSize mode="box" minFontSizePx={18} maxFontSizePx={36}>
              <span className="drop-shadow-xs drop-shadow-black">
                {bluesky}
              </span>
            </AutoTextSize>
          </>
        ),
      });
    }

    return items;
  }, [name, twitch, bluesky]);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      if ("startViewTransition" in document) {
        (document as Document).startViewTransition(() => {
          setIndex((prev) => (prev + 1) % slides.length);
        });
      } else {
        setIndex((prev) => (prev + 1) % slides.length);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className={`auto-text-size-override h-full ${className} ${textSize}`}
      style={{ viewTransitionName: "runner-content" }}
    >
      {slides[index]?.content}
    </div>
  );
};
