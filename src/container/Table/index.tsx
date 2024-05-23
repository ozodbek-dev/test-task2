import type { PaginationProps, TableColumnsType } from "antd";
import { Table } from "antd";
import Nextbtn from "assets/images/icons/Nextbtn";
import NotFoundTableIcon from "assets/images/icons/notFoundtableIcon";
import Prevbtn from "assets/images/icons/Prevbtn";

import { useHooks } from "hooks";
import { useCallback, useState } from "react";
import { TMeta } from "services/types";
import Tab from "container/Tabs";
interface IProps {
  items: any;
  className?: any;
  style?: any;
  columns: TableColumnsType<any>;
  hasPagination?: boolean;
  meta?: TMeta;
  isLoading?: boolean;
  tabs?: any;
  locale?: any;
  actions?: TableColumnsType<any>;
  rowSelection?: object;
}

const TableComponent = (props: IProps) => {
  const {
    columns,
    items,
    hasPagination = true,
    meta,
    isLoading,
    tabs,
    actions,
    rowSelection
  } = props;

  const { get, query, navigate, qs, t } = useHooks();
  const [current, setCurrent] = useState<number>(1);
  const onChange = useCallback(
    (pagination: PaginationProps) => {
      navigate({
        search: qs.stringify({
          ...query,
          page: pagination.current,
          limit: pagination.pageSize,
        }),
      });
    },
    [navigate, query, qs]
  );

  if (actions?.length) {
    columns.concat(actions)
  }

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <Prevbtn />;
    }
    if (type === "next") {
      return <Nextbtn />;
    }
    return originalElement;
  };


  return (
    <>
   
      <Table
        rowSelection={rowSelection}
        
        locale={{
          emptyText: (
            <div className="flex justify-center items-center flex-col pt-[32px] pb-[32px]">
              <NotFoundTableIcon />
              <h2 className="mt-[20px] ">
                {t("Sizning so'rovingiz bo'yicha hech qanday natija topilmadi")}
              </h2>
            </div>
          ),
        }}
        columns={columns?.filter((el) => el.title !== null)}
        dataSource={items}
        rowKey={"id"}
        className={`[&_.ant-table-cell]:text-[16px] [&_.ant-table-cell]:not-italic [&_.ant-table-cell]:leading-[20px]  [&_.ant-table-cell]:h-[56px] [&_.ant-table-cell]:!text-slate-400 [&_.ant-table-cell]:!font-normal [&_.ant-pagination]:p-[12px] [&_.ant-pagination]:rounded-b-[8px] [&_.antd-row:nth-child(even)]:bg-slate-900  [&_.ant-pagination]:bg-zinc-900 [&_.ant-table-thead_.ant-table-cell]:bg-slate-900 [&_.ant-table-row:nth-child(odd)]:bg-slate-900 [&_.ant-table-row:hover]:!text-slate-900 [&_.ant-table-row:nth-child(even)]:bg-slate-800  [&_.ant-pagination-next]:w-[42px] [&_.ant-pagination-next]:h-[42px] [&_.ant-pagination-next]:flex [&_.ant-pagination-next]:items-center [&_.ant-pagination-next]:justify-center [&_.ant-pagination-next]:order-last [&_.ant-pagination-prev]:w-[42px] [&_.ant-pagination-prev]:h-[42px] [&_.ant-pagination-prev]:flex [&_.ant-pagination-prev]:items-center [&_.ant-pagination-prev]:justify-center [&_.ant-pagination-prev]:order-last [&_.ant-pagination-item]:w-[42px] [&_.ant-pagination-item]:h-[42px] [&_.ant-pagination-item]:flex [&_.ant-pagination-item]:items-center [&_.ant-pagination-item]:justify-center [&_.ant-pagination-item_a]:!text-[#fff] [&_.ant-pagination-item]:rounded-[12px] [&_.ant-table-thead_.ant-table-cell]:before:!w-0 [&_.ant-table-cell]:!py-[0px] [&_.ant-pagination-item-active]:w-[42px] [&_.ant-pagination-item-active]:h-[42px] [&_.ant-pagination-item-active]:flex [&_.ant-pagination-item-active]:items-center [&_.ant-pagination-item-active]:justify-center [&_.ant-pagination-item-active]:rounded-[12px] [&_.ant-pagination-item-active]:bg-blue-900 [&_.ant-pagination-item-active_a]:!text-[#fff] [&_.ant-pagination-item]:text-[16px] [&_.ant-pagination-item]:not-italic [&_.ant-pagination-item]:font-semibold [&_.ant-pagination-item]:leading-[24px]
       ${tabs
            ? "[&_.ant-table]:rounded-t-[0px]"
            : "[&_.ant-table]:rounded-t-[8px]"
          }  [&_.ant-pagination]:!m-[0px]`}
        pagination={
          hasPagination
            ? meta
              ? {
                itemRender: itemRender,
                disabled: isLoading,
                position: ["bottomRight"],
                current: +get(query, "page", 1),
                total: +get(meta, "totalCount", 0),
                pageSize: +get(query, "limit", get(meta, "perPage")),
                showTotal: (total, range) => (
                  <h1 className="text-[16px] not-italic font-normal leading-[20pxs] p-[5px] absolute left-[32px] text-white">
                    {t("Natija")} {range[1]} - {total}
                  </h1>
                ),
              }
              : {
                itemRender: itemRender,
                position: ["bottomRight"],
                current: current,
                total: items.length,
                showTotal: (total, range) => (
                  <h1 className="text-[16px] not-italic font-normal leading-[20pxs] p-[5px] absolute left-[32px]">
                    {t("Natija")} {range[1]} - {total}
                  </h1>
                ),
                pageSize: 10,
              }
            : false
        }
        onChange={(page: any) => {
          if (meta) {
            onChange(page);
          } else {
            setCurrent(page.current);
          }
        }}
        loading={isLoading}
      />
    </>
  );
};

export default TableComponent;
