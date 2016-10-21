import 'reflect-metadata';
import { Injector } from './IoC';
import { TypeScriptHero } from './TypeScriptHero';
import { Disposable, ExtensionContext } from 'vscode';

let extension: Disposable;

export function activate(context: ExtensionContext): void {
    if (Injector.isBound('context')) {
        Injector.unbind('context');
    }
    Injector.bind<ExtensionContext>('context').toConstantValue(context);
    extension = Injector.get(TypeScriptHero);
}

export function deactivate(): void {
    extension.dispose();
    extension = null;
}
