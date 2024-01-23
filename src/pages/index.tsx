import { PageLayout } from '@src/components/layouts'
import { Text } from '@src/styles/sidan'

export default function Main() {
    return (
        <>
            <PageLayout>
                <div className="relative inset-0 m-auto flex min-h-screen w-full flex-col items-start justify-start">
                    <div className="relative flex h-fit w-full flex-col items-start justify-start gap-y-16 px-8 pb-6 pt-8 lg:pb-10 lg:pt-[112px]">
                        <Text
                            responsive="welcome"
                            css={{
                                w: 'fit-content',
                            }}>
                            Hello world!
                        </Text>
                    </div>
                </div>
            </PageLayout>
        </>
    )
}
