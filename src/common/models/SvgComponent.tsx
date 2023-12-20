import { FunctionComponent, SVGProps } from 'react';

export type SvgComponent = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string }
>;
