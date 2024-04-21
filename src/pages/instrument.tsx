  import { useParams } from "react-router-dom";
  import instruments from "../mocks/mock";
  import { Table, TableColumn } from "@consta/uikit/Table";
  import { Button } from "@consta/uikit/Button";
  import { IconDocBlank } from "@consta/icons/IconDocBlank";
  import { Text } from "@consta/uikit/Text";
  import { Instrument } from "../mocks/mock";

  function InstrumentList() {
    const { type, name } = useParams<{ type: string; name: string }>();

    let item: Instrument | null = null;

    if (type !== undefined) {
      const filteredItems = instruments[type].filter((el) => el.name === name);
      if (filteredItems.length > 0) {
        item = filteredItems[0];
      }
    }

    const PopularRows =
      item?.popularСriterions.map((criterion: string, index: number) => ({
        id: (index + 1).toString(),
        name: criterion,
        result: item.popularResult[index],
      })) || [];

    const FunctionalRows =
      item?.functionalCriterions.map((criterion, index) => ({
        id: (index + 1).toString(),
        name: criterion,
        result: item.functionalResult ? item.functionalResult[index] : null,
      })) || [];

    const columns: TableColumn<(typeof FunctionalRows)[number]>[] = [
      {
        title: "Критерий",
        accessor: "name",
      },
      {
        title: "Результат",
        accessor: "result",
      },
    ];
    return (
      <div className="container">
        <div className="instrument-header">
          <div>
            <h1>{item?.name}</h1>
            <a href={item?.documentation} target="_blank">
              <Button label="Документация" iconRight={IconDocBlank} />
            </a>
          </div>
          <img className="img-inst" src={item?.image}  alt={item?.name}/>
        </div>
        <Text lineHeight="m" as="p">
          <strong>Описание: </strong>
          {item?.recommendations}
        </Text>
        <hr />
        <h2>Пример реализации</h2>
        <iframe
          src={item?.example}
          style={{
            width: "100%",
            fontSize: "16px",
            height: "600px",
            marginBottom: "50px",
          }}
          title="JestExample"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>

        <h2>Популярность и удобство использования</h2>
        <Table rows={PopularRows} columns={columns} data-testid="popular-table"/>
        <h2>Функциональность</h2>
        <Table rows={FunctionalRows} columns={columns} className="table" data-testid="functional-table"/>
      </div>
    );
  }

  export default InstrumentList;
