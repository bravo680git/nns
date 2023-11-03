type Category<T> = {
    name: string
    value: T[]
}

export type PageData = [
    Category<{
        title1: string
        title2: string
        title3: string
        button1Label: string
        button2Label: string
        button1Url: string
        button2Url: string
    }>,
    Category<{
        title: string
        description: string
        image: string
    }>,
    Category<{
        title: string
        description1: string
        description2: string
        description3: string
        buttonLabel: string
        buttonUrl: string
        image: string
    }>,
    Category<{
        sessionTitle: string
        title: string
        description: string
        url: string
        image: string
        buttonLabel: string
        buttonUrl: string
    }>,
    Category<{
        image: string
        url: string
        subtitle: string
    }>,
    Category<{
        coverImage: string
        description: string
        channelLogo: string
        url: string
    }>,
    Category<{
        label: string
        url: string
    }>,
]
