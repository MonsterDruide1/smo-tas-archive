import classNames from "classnames"
import React, { useRef } from "react";
import styles from "../../styles/SearchBar.module.css"
import TasEntry from "../data/TasEntry"
import Fuse from "fuse.js"
import TasData from "../data/TasData";
import { getNiceName, KingdomType } from "../data/Kingdom";
import Kingdom from "./KingdomVisual"
import KingdomTag from "./KingdomTag";
import AuthorEntry from "../data/AuthorEntry";
import AuthorData from "../data/AuthorData";
import AuthorTag from "./AuthorTag";

const fuse = new Fuse(TasData, {
    keys: ["name", "setup", "notes"],
    includeScore: true,
})

export class Filter {
    readonly text: string;
    readonly kingdom: KingdomType | null;
    readonly author: AuthorEntry | null;

    constructor(text: string = "", kingdom: KingdomType | null = null, author: AuthorEntry | null = null) {
        this.text = text;
        this.kingdom = kingdom;
        this.author = author;
    }

    changeText(text: string): Filter {
        return new Filter(text, this.kingdom, this.author);
    }
    changeAuthor(author: AuthorEntry): Filter {
        return new Filter(this.text, this.kingdom, author);
    }
    changeKingdom(kingdom: KingdomType): Filter {
        return new Filter(this.text, kingdom, this.author);
    }
    deleteLastTag(): Filter {
        if (this.author != null) {
            return new Filter(this.text, this.kingdom, null);
        }
        if (this.kingdom != null) {
            return new Filter(this.text, null, this.author);
        }
        // no tags to delete
        return this;
    }

    filter(): [TasEntry, number][] {
        var results = TasData.map((entry, index) => [entry, index]) as [TasEntry, number][];
        if (this.text !== "") {
            results = fuse.search(this.text).map(result => [result.item, result.refIndex]) as [TasEntry, number][];
        }
        if (this.kingdom != null) {
            results = results.filter(([entry, score]) => entry.kingdom == this.kingdom);
        }
        const author = this.author;
        if (author != null) {
            results = results.filter(([entry, score]) => entry.authors.includes(author));
        }

        if(this.text !== "") {
            return results; // already sorted by score
        } else {
            // descending by date
            return results.sort((a, b) => b[0].date.localeCompare(a[0].date));
        }
    }
}

export interface Props {
    className?: string,
    filter: Filter,
    onFilterChange: (filter: Filter) => void,
}
export interface State {
    input_ref: React.RefObject<HTMLInputElement>,
    suggestions_ref: React.RefObject<HTMLUListElement>,
    main_ref: React.RefObject<HTMLDivElement>,
    showSuggestions: boolean,
    selectedSuggestion: number,
}

export default class SearchBar extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            input_ref: React.createRef(),
            suggestions_ref: React.createRef(),
            main_ref: React.createRef(),
            showSuggestions: false,
            selectedSuggestion: -1,
        }
    }

    inputChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({selectedSuggestion: -1});
        this.props.onFilterChange(this.props.filter.changeText(event.target.value));
    }

    onClear(_: React.MouseEvent<HTMLButtonElement>) {
        this.setState({selectedSuggestion: -1});
        this.props.onFilterChange(new Filter());
        let input = this.state.input_ref.current;
        if (input != null) {
            input.value = "";
            input.focus();
        }
    }

    onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        // if carriage is at the start of the input, and the user presses backspace, delete the last tag
        if (event.key === "Backspace" && this.state.input_ref.current?.selectionStart === 0 && this.state.input_ref.current?.selectionEnd === 0) {
            event.preventDefault();
            this.props.onFilterChange(this.props.filter.deleteLastTag());
        }

        if(event.key === "ArrowDown") {
            event.preventDefault();
            this.setState({selectedSuggestion: Math.min(this.state.selectedSuggestion + 1, (this.state.suggestions_ref.current?.childElementCount ?? 0)-1)});
        }
        if(event.key === "ArrowUp") {
            event.preventDefault();
            this.setState({selectedSuggestion: Math.max(this.state.selectedSuggestion - 1, -1)});
        }
        if(event.key === "Enter") {
            event.preventDefault();
            if (this.state.selectedSuggestion >= 0) {
                const suggestion = this.state.suggestions_ref.current?.children[this.state.selectedSuggestion];
                if (suggestion != null) {
                    (suggestion as HTMLLIElement).click();
                    this.setState({showSuggestions: true, selectedSuggestion: -1});
                }
            }
        }
    }

    getSuggestions(text_raw: string): (AuthorEntry|KingdomType)[] {
        const text = text_raw.trim();
        let suggestions: (AuthorEntry|KingdomType)[] = [];
        if(text.length === 0) return suggestions;
        for (let kingdom_name in KingdomType) {
            if(!isNaN(kingdom_name as any)) continue;
            let kingdom = KingdomType[kingdom_name as keyof typeof KingdomType];
            if (kingdom_name.toLowerCase().includes(text.toLowerCase()) || getNiceName(kingdom).toLowerCase().includes(text.toLowerCase())) {
                suggestions.push(kingdom);
            }
        }
        for (let author of AuthorData) {
            if (author.name.toLowerCase().includes(text.toLowerCase())) {
                suggestions.push(author);
            }
        }
        return suggestions.slice(0, 10);
    }

    onInputFocus() {
        this.setState({showSuggestions: true, selectedSuggestion: -1});
    }

    onAuthorSuggestionClick(author: AuthorEntry) {
        let input = this.state.input_ref.current;
        if (input != null) {
            input.value = "";
        }
        this.props.onFilterChange(this.props.filter.changeAuthor(author).changeText(""));
    }
    onKingdomSuggestionClick(kingdom: KingdomType) {
        let input = this.state.input_ref.current;
        if (input != null) {
            input.value = "";
        }
        this.props.onFilterChange(this.props.filter.changeKingdom(kingdom).changeText(""));
    }

    onDocumentClick(event: MouseEvent) {
        this.setState({showSuggestions: this.state.main_ref.current?.contains(event.target as Node) ?? false});
    }

    componentDidMount(): void {
        document.addEventListener("click", this.onDocumentClick.bind(this));
    }
    componentWillUnmount(): void {
        document.removeEventListener("click", this.onDocumentClick.bind(this));
    }

    render() {
        let suggestionsList = this.getSuggestions(this.props.filter.text);
        return (
            <div className={classNames(styles.searchbar, this.props.className)} ref={this.state.main_ref}>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

                <span className={styles.invisibleBacksupport} onClick={() => {this.state.input_ref.current?.focus();this.onInputFocus();}}/>

                <span className={classNames("material-symbols-outlined", styles.icon)}>search</span>
                <span className={classNames("material-symbols-outlined", styles.clear)} onClick={this.onClear.bind(this)}>close</span>

                {
                    this.props.filter.kingdom === null ? "" : <KingdomTag kingdom={this.props.filter.kingdom} />
                }
                {
                    this.props.filter.author === null ? "" : <AuthorTag author={this.props.filter.author} />
                }

                <input placeholder="Search..." className={styles.input} onInput={this.inputChange.bind(this)} onKeyDown={this.onKeyDown.bind(this)} onFocus={this.onInputFocus.bind(this)} ref={this.state.input_ref}/>

                {
                    (suggestionsList.length === 0 || !this.state.showSuggestions) ? "" : (
                    <ul className={styles.suggestions} ref={this.state.suggestions_ref}>
                        {
                            suggestionsList.map((suggestion, index) => {
                                let className = classNames(styles.suggestion, {[styles.suggestionActive]: index === this.state.selectedSuggestion});
                                if ((suggestion as AuthorEntry).icon !== undefined) {
                                    let element = suggestion as AuthorEntry;
                                    return <li key={element.name} className={className} onClick={() => this.onAuthorSuggestionClick(element)}>
                                            <div className={styles.author_item}>
                                            <img className={styles.author_thumbnail} src={element.icon} alt={`Profile-icon of ${element.name}`} />
                                            <p className={styles.author_name}>{element.name}</p>
                                        </div>
                                    </li>
                                } else { // has to be KingdomType
                                    return <li key={suggestion as KingdomType} className={className} onClick={() => this.onKingdomSuggestionClick(suggestion as KingdomType)}>
                                        <Kingdom kingdom={suggestion as KingdomType}/>
                                    </li>
                                }
                            })
                        }
                    </ul>
                    )
                }
            </div>
        );
    }
}
