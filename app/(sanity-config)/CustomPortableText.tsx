import {
  PortableTextBlockComponent,
  PortableTextTypeComponent,
} from "@portabletext/react";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { PortableTextBlockStyle, TypedObject } from "@portabletext/types";
import Refractor from "react-refractor";

// Load any languages you want to use from `refractor`
import js from "refractor/lang/javascript";
import ts from "refractor/lang/typescript";
import css from "refractor/lang/css";
import html from "refractor/lang/markup";

// Then register them
Refractor.registerLanguage(js);
Refractor.registerLanguage(ts);
Refractor.registerLanguage(css);
Refractor.registerLanguage(html);

type ImageProps = {
  value: {
    _type: "image";
    _key: string;
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  isInline: boolean;
  index: number;
};
const defaultBlockStyles: Record<
  PortableTextBlockStyle,
  PortableTextBlockComponent | undefined
> = {
  normal: ({ children }) => <p className="text-base">{children}</p>,
  blockquote: ({ children }) => (
    <blockquote className="text-base">{children}</blockquote>
  ),
  h1: ({ children }) => <h1 className="text-3xl">{children}</h1>,
  h2: ({ children }) => <h2 className="text-2xl">{children}</h2>,
  h3: ({ children }) => <h3 className="text-lg">{children}</h3>,
  h4: ({ children }) => <h4 className="text-base">{children}</h4>,
  h5: ({ children }) => <h5 className="text-sm">{children}</h5>,
  h6: ({ children }) => <h6 className="text-xs">{children}</h6>,
};
const typesBlockStyles: Record<string, PortableTextTypeComponent | undefined> =
  {
    image: (props: ImageProps) => {
      const urlFor = (source: any) =>
        urlBuilder({ projectId: "akedaqmq", dataset: "production" }).image(
          source
        );
      const { width, height } = getImageDimensions(props.value);

      return (
        <div className="relative">
          <Image
            src={urlFor(props.value.asset).url()}
            alt={"blog image"}
            width={width}
            height={height}
            className="rounded-lg"
            loading="lazy"
          />
        </div>
      );
    },
    code: ({
      value,
    }: {
      value: {
        _type: "code";
        _key: string;
        language: string;
        code: string;
      };
    }) => {
      const { code, language } = value;
      return (
        <Refractor
          language={language}
          className="rounded-lg p-4"
          value={code}
        />
      );
    },
  };
export const CustomPortableTextComponent = {
  block: defaultBlockStyles,
  types: typesBlockStyles,
};
