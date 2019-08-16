package io.kotlintest.inspectors

sealed class ElementResult<out T> {
  abstract fun value(): T
  abstract fun error(): Throwable?
}

class ElementPass<out T>(val t: T) : ElementResult<T>() {
  override fun value(): T = t
  override fun error(): Throwable? = null
}

class ElementFail<out T>(val t: T, val error: Throwable) : ElementResult<T>() {
  override fun value(): T = t
  override fun error(): Throwable? = error
}