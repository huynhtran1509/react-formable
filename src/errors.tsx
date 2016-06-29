/* tslint:disable */

import * as React from 'react';
import identity from './helpers/identity';
import flatten from './helpers/flatten';
import values from './helpers/values';

interface IErrorsDefaultProps {
    errors?: string[];
    additionalErrors?: string[];
    fieldErrors?: any;
    scoped?: boolean;
    renderError?: (error: any) => void;
    className?: string;
}

interface IErrorsProps extends IErrorsDefaultProps {
}

export default class Fieldlist extends React.Component<IErrorsProps, {}> {
    static displayName = 'Errors';
    
    public static defaultProps: IErrorsDefaultProps = {
        errors: [],
        additionalErrors: [],
        fieldErrors: [],
        scoped: false,
        renderError: identity,
        className: ''
    };

    public render(): React.ReactElement<{}> {
        const { errors, additionalErrors, scoped } = this.props;

        const fieldErrors = flatten(values(this.props.fieldErrors))
                                .filter(s => typeof s === 'string');

        const allErrors = [].concat(scoped ? fieldErrors : errors)
                            .concat(additionalErrors);

        const className = `${this.props.className} errors`;

        return <ul {...this.props} className={className}>
            {allErrors.map((error, i) =>
                <li key={i}> {this.props.renderError(error)} </li>)}
        </ul>;
    }
}
