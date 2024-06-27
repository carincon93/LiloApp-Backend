import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { BadRequestException, ValidationPipe } from '@nestjs/common'
import { I18nValidationExceptionFilter, I18nValidationPipe } from 'nestjs-i18n'

process.env.TZ
const port = process.env.PORT || 3000
console.log(`Launching NestJS app on port ${port}, URL: http://0.0.0.0:${port}`)
console.log(process.env.TZ)

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const config = new DocumentBuilder().addBearerAuth().setTitle('LiloApp').setDescription('LiloApp').setVersion('1.0').addTag('LiloApp').build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)

    app.useGlobalPipes(
        new I18nValidationPipe(),

        new ValidationPipe({
            exceptionFactory: (errors) => {
                const result = errors.map((error) => ({
                    property: error.property,
                    message: error.constraints[Object.keys(error.constraints)[0]],
                }))
                return new BadRequestException(result)
            },
            stopAtFirstError: true,
        }),
    )

    app.useGlobalFilters(new I18nValidationExceptionFilter())

    // // Enable CORS
    // app.enableCors({
    //     origin: process.env.NEXTJS_PUBLIC_URL,
    //     credentials: true,
    // })

    await app.listen(port)
}
bootstrap()
