import { Fragment } from "react";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  Breadcrumb as BreadcrumbParent,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadCrumbType = {
  title: string;
  link?: string;
};

type BreadCrumbPropsType = {
  items: BreadCrumbType[];
};

const Breadcrumb = ({ items }: BreadCrumbPropsType) => {
  return (
    <BreadcrumbParent>
      <BreadcrumbList>
        {items.map((item) => (
          <Fragment key={item.title}>
            {item.link ?
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink href={item.link}>{item.title}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            : <BreadcrumbItem>
                <BreadcrumbPage>{item.title}</BreadcrumbPage>
              </BreadcrumbItem>
            }
          </Fragment>
        ))}
        {/* <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem> */}
      </BreadcrumbList>
    </BreadcrumbParent>
  );
};

export default Breadcrumb;
