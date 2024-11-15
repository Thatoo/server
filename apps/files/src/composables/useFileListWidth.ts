/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import type { Ref } from 'vue'
import { useElementSize } from '@vueuse/core'
import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Get the reactive width of the file list
 */
export function useFileListWidth(): Readonly<Ref<number>> {
	const element = ref(document.querySelector<HTMLElement>('#app-content-vue') ?? document.body)
	onMounted(() => { element.value = document.querySelector('#app-content-vue')! })

	const { width, stop } = useElementSize(element)
	onUnmounted(stop)

	return width
}
