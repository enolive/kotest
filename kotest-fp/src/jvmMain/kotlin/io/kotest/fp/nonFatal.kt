package io.kotest.fp

actual fun nonFatal(t: Throwable): Boolean = when (t) {
   is VirtualMachineError, is ThreadDeath, is InterruptedException, is LinkageError -> false
   else -> true
}
