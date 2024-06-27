import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n'
import { EnglishWordsModule } from './english_words/english_words.module'
import { ItalianWordsModule } from './italian_words/italian_words.module';
import * as path from 'path'

@Module({
    imports: [
        I18nModule.forRoot({
            fallbackLanguage: 'es',
            loaderOptions: {
                path: path.join(__dirname, '/i18n/'),
                watch: true,
            },
            resolvers: [{ use: QueryResolver, options: ['lang', 'locale', 'l'] }, AcceptLanguageResolver],
        }),
        EnglishWordsModule,
        ItalianWordsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
