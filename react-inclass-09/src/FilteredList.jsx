import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class FilteredList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            type: "All"
        };
    }

    onSearch = (event) => {
        this.setState({
            search: event.target.value
        });
    };

    onFilter = (eventKey) => {
        this.setState({
            type: eventKey
        });
    };

    filterItem = (item) => {
        const matchesSearch = item.name
            .toLowerCase()
            .includes(this.state.search.toLowerCase());

        const matchesType =
            this.state.type === "All" ||
            item.type === this.state.type;

        return matchesSearch && matchesType;
    };

    render() {
        const filteredItems = this.props.items.filter(this.filterItem);

        return (
            <div>
                <h2>Produce List</h2>

                <input
                    type="text"
                    placeholder="Search produce"
                    value={this.state.search}
                    onChange={this.onSearch}
                />

                <DropdownButton
                    id="produce-filter"
                    title={`Filter: ${this.state.type}`}
                    onSelect={this.onFilter}
                >
                    <Dropdown.Item eventKey="All">All</Dropdown.Item>
                    <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
                    <Dropdown.Item eventKey="Vegetable">
                        Vegetables
                    </Dropdown.Item>
                </DropdownButton>

                <ul>
                    {filteredItems.map((item) => (
                        <li key={item.name}>
                            {item.name} — {item.type}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default FilteredList;